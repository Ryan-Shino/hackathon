import os
import sqlite3

# get the directory where database.py is located
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DB_PATH = os.path.join(BASE_DIR, "hackathon.db")


def get_db_connection():
    # connect() will now use the absolute path
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn
