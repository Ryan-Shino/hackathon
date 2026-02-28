import sqlite3
import os

# Get the directory where database.py is located
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
# If database.py is inside 'backend/', this puts the DB in 'backend/hackathon.db'
DB_PATH = os.path.join(BASE_DIR, "hackathon.db") 

def get_db_connection():
    # connect() will now use the absolute path
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE NOT NULL,
            password_hash TEXT NOT NULL,
            level INTEGER DEFAULT 1,
            strength INTEGER DEFAULT 10,
            intelligence INTEGER DEFAULT 10,
            stamina INTEGER DEFAULT 10,
            charisma INTEGER DEFAULT 10
        )
    """)
    conn.commit()
    conn.close()
    print(f"Database initialized at: {DB_PATH}")
