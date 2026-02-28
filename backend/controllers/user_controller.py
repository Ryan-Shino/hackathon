class UserController:
    def __init__(self, conn):
        self.conn = conn

    def get_user_by_id(self, user_id: int):
        cursor = self.conn.cursor()
        cursor.execute(
            "SELECT * FROM users WHERE id = ?",
            (user_id,),
        )
        return cursor.fetchone()
