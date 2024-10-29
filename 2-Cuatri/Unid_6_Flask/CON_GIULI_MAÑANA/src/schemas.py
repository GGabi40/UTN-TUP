from pydantic import BaseModel, EmailStr
from typing import Optional

class UserCreateSchema(BaseModel):
    first_name: str
    last_name: str
    email: EmailStr # cada vez que se ingresa un mail, se validará
    image_url: Optional[str] = None # es opcional, su valor por defecto es None