from passlib.context import CryptContext

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


class AuthController:
    def __init__(self, conn):
        self.conn = conn

    def register_user(self, username: str, password: str):
        hashed = pwd_context.hash(password)
        cursor = self.conn.cursor()
        cursor.execute(
            "INSERT INTO users (username, password_hash) VALUES (?, ?)",
            (username, hashed),
        )
        self.conn.commit()

    def login_user(self, username: str, password: str):
        cursor = self.conn.cursor()
        cursor.execute(
            "SELECT * FROM users WHERE username = ?",
            (username,),
        )
        user = cursor.fetchone()

        if not user:
            return None

        if not pwd_context.verify(password, user["password_hash"]):
            return None

        return dict(user)

# classes
# - nature
# - exercise
# - social
# - learning
