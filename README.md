# Backend service
## Backend dependencies:
0. Django `pip install django`
1. CORS headers `pip install django-cors-headers`
2. REST framework `pip install djangorestframework`
3. Psycopg 2 `pip install psycopg2`
4. Pillow `pip install pillow`

## PostgreSQL "getting-started"
0. In Windows command line (Win+R -> cmd) type `psql -U postgres` to log in with user `postgres` (password: `password`)
1. Type `\l` to see the list of all currently existing databases
2. To create new database type `CREATE DATABASE "your-database-name";`

## Database commands
0. To work with migrations type:
    - `python manage.py makemigrations`
    - `python manage.py migrate`
1. To create Superuser and log in as admin type:
    `python manage.py createsuperuser`