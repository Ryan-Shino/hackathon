class UserController:
    def __init__(self, conn):
        self.conn = conn

    def get_user_by_username(self, username: str):
        cursor = self.conn.cursor()
        cursor.execute(
            "SELECT * FROM users WHERE username = ?",
            (username,),
        )
        return cursor.fetchone()
