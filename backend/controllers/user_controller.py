class UserController:
    def __init__(self, conn):
        self.conn = conn

    def get_user(self, username: str):
        cursor = self.conn.cursor()
        cursor.execute(
            """
            SELECT username, exercise_stat, learning_stat, social_stat, nature_stat
            FROM users
            WHERE username = ?
            """,
            (username,),
        )
        row = cursor.fetchone()
        return dict(row) if row else None

    def update_stat(self, username: str, stat: str, value: float):
        cursor = self.conn.cursor()
        query = f"UPDATE users SET {stat} = ? WHERE username = ?"
        cursor.execute(query, (value, username))
        self.conn.commit()
