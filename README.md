# Currency Bird Demo for Evaluation

This project was created to solve the problem that Currency Bird gave as a challenge in the role application.

## How the project is structured

The project has two main applications:

* **Backend:** This application takes care of the businnes logic throught API RESTful, it was develop using NodeJS with the framework callend NestJS.
* **Frontend:** Web application developed in ReactJS.
* **Database:** This is not part of the code but it is necessary to mention that the database is MySQL.

## How to run this project

The easy and recommended way to run this project is using **Docker** with **Docker-compose**. The reason is that you only need to have installed `docker-compose` cli to run this project in ONE command.

*Note: If you do not have installed `docker` with `docker-compose`, please read this [How to install blog](https://docs.docker.com/engine/install/ubuntu/).*

Once you have installed `docker-compose`, clone this repository and go to the root folder. Then, you only have to write the next command.

```sh
docker-compose up --build
```

This command will install the next images: *node:alpine*, *nginx* and *mysql*. And run three application *mysql* on port 3306, *api* on port 8000 and *frontend* on port 3000.

*Warning: Please make sure to have the port `3000` and `8000` available in order to run this project without problems.*

## To consider

* In order to use the application without problems a database dump was create on init mysql with the first customer (who will create the first invitation link) so in order to generate a invitation link you must write `Test` as a full name and `test@test.com` as email.