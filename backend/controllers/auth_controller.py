from argon2 import PasswordHasher

# This replaces the pwd_context
ph = PasswordHasher()


class AuthController:
    def __init__(self, conn):
        self.conn = conn
        # This line is CRITICAL so you can use user["password_hash"]
        self.conn.row_factory = lambda cursor, row: dict(
            zip([col[0] for col in cursor.description], row)
        )

    def register_user(self, username: str, password: str):
        cursor = self.conn.cursor()

        # 1. Check exists
        cursor.execute("SELECT username FROM users WHERE username = ?", (username,))
        if cursor.fetchone():
            return False

        # 2. Hash using Argon2 (No 72-character limit!)
        hashed = ph.hash(password)

        cursor.execute(
            """INSERT INTO users (username, password_hash, level, strength, intelligence, stamina, charisma) 
               VALUES (?, ?, 1, 10, 10, 10, 10)""",
            (username, hashed),
        )
        self.conn.commit()
        return True

    def login_user(self, username: str, password: str):
        print("attempting login for:", username)

        cursor = self.conn.cursor()
        cursor.execute("SELECT * FROM users WHERE username = ?", (username,))
        user = cursor.fetchone()

        if not user:
            return None

        try:
            # Verify the hash
            ph.verify(user["password_hash"], password)
        except:
            # This triggers if the password is wrong
            return None

        user_data = dict(user)
        del user_data["password_hash"]
        return user_data
