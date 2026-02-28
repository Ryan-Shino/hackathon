import sqlite3

# Connect to your database file
conn = sqlite3.connect("hackathon.db")
cursor = conn.cursor()

try:
    # 1. Try to see if the table exists
    cursor.execute("SELECT name FROM sqlite_master WHERE type='table' AND name='users';")
    table_exists = cursor.fetchone()
    print(f"Table 'users' exists: {bool(table_exists)}")

    # 2. Try to insert a dummy user
    cursor.execute("""
        INSERT INTO users (username, password_hash) 
        VALUES ('test_warrior', 'hashed_password_123')
    """)
    conn.commit()
    print("Successfully inserted test user!")

    # 3. Try to read it back
    cursor.execute("SELECT * FROM users WHERE username = 'test_warrior'")
    user = cursor.fetchone()
    print(f"Retrieved user: {user}")

except Exception as e:
    print(f"Error: {e}")
finally:
    conn.close()
