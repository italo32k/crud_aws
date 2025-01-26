
# API Biblioteca

## Como baixar a aplicação

""" git clone https://github.com/italo32k/crud_aws.git """

## Criar ambiente virtual

""" python -m venv venv """
""" source/Scripts/activate """

## Rodar aplicação

""" python manage.py makemigrations """
""" python manage.py migrate """
""" python manage.py runserver """

## URls

### GET

- http://127.0.0.1/book

### POST

- http://127.0.0.1/book

- Corpo da requisição:
Json
{
    "autor":"string",
    "titulo":"string",
    "genero":"string",
    "quantidade":integer,
}

### PUT

- http://127.0.0.1/book

- Corpo da requisição:
Json
{
    "autor":"string",
    "titulo":"string",
}

### DELETE

- http://127.0.0.1/book

- Corpo da requisição:
Json
{
    "titulo":"string",
}