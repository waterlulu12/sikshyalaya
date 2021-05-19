from typing import List
from pydantic import Json

from datetime import datetime

classSessions: List[Json] = [
    {
        "datetime": datetime(2021, 6, 12, 12, 00, 00),
        "is_active": True,
        "instructor": [10, 9],
        "course_id": 1,
        "group_id": 1,
        "description": "Starting with the Fundamentals of Programming",
        "duration": 120,
    },
    {
        "datetime": datetime(2021, 10, 22, 14, 00, 00),
        "is_active": True,
        "instructor": [8, 9],
        "course_id": 3,
        "group_id": 3,
        "description": "Starting with the Intro to Environmental Sustainability",
        "duration": 60,
    },
    {
        "datetime": datetime(2021, 8, 1, 9, 00, 00),
        "is_active": True,
        "instructor": [8],
        "course_id": 2,
        "group_id": 2,
        "description": "Starting with Algorithms, and Time Complexity of Algorithms",
        "duration": 120,
    },
    {
        "datetime": datetime(2021, 3, 4, 13, 00, 00),
        "is_active": True,
        "instructor": [8],
        "course_id": 4,
        "group_id": 2,
        "description": "Green Energy and its Principles indepth discussion",
        "duration": 60,
    },
    {
        "datetime": datetime(2021, 4, 4, 16, 00, 00),
        "is_active": True,
        "instructor": [9, 10],
        "course_id": 3,
        "group_id": 1,
        "description": "Starting with the Intro to Environmental Sustainability",
        "duration": 60,
    },
    {
        "datetime": datetime(2021, 8, 2, 9, 00, 00),
        "is_active": True,
        "instructor": [10, 8],
        "course_id": 7,
        "group_id": 9,
        "description": "Presentation of the Fundamental definitions stated in law, and Discussion based around it.",
        "duration": 120,
    },
    {
        "datetime": datetime(2021, 7, 7, 15, 00, 00),
        "is_active": True,
        "instructor": [9],
        "course_id": 12,
        "group_id": 10,
        "description": "Radiology.",
        "duration": 60,
    },
    {
        "datetime": datetime(2021, 1, 6, 13, 00, 00),
        "is_active": True,
        "instructor": [9],
        "course_id": 10,
        "group_id": 7,
        "description": "Discussion on the dos and donts of getting started with business.",
        "duration": 60,
    },
    {
        "datetime": datetime(2021, 6, 4, 10, 00, 00),
        "is_active": True,
        "instructor": [8],
        "course_id": 10,
        "group_id": 8,
        "description": "Discussion on the dos and donts of getting started with business.",
        "duration": 60,
    },
    {
        "datetime": datetime(2021, 12, 9, 7, 00, 00),
        "is_active": True,
        "instructor": [8, 9, 10],
        "course_id": 8,
        "group_id": 9,
        "description": "Criminal Law: What is it, and What are the current trails are proceeding under the offence listed in it.",
        "duration": 60,
    },
]
