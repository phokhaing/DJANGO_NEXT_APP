FROM python

# WORKDIR .
# COPY . ./django_app
COPY . ./django_app

RUN pip3 freeze > requirements.txt
COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt

WORKDIR ./django_app
# CMD cd src \
CMD python3 manage.py makemigrations \
   && python3 manage.py migrate \
   && python3 manage.py runserver 0.0.0.0:8001
# CMD [ "python3", "manage.py", "makemigrations" ]
# CMD [ "python3", "manage.py", "runserver", "0.0.0.0:8000" ]
EXPOSE 8001