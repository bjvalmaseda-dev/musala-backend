<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
<h3 align="center">musala-backend</h3>
  <p align="center">
    Musala Soft technical test backend
    <br />
    <a href="https://github.com/bjvalmaseda-dev/musala-backend"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/bjvalmaseda-dev/musala-backend/issues">Report Bug</a>  
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#tests">Test</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
   
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This sample project is managing gateways - master devices that control multiple peripheral devices. 
Your task is to create a REST service (JSON/HTTP) for storing information about these gateways and their associated devices. This information must be stored in the database. 

When storing a gateway, any field marked as “to be validated” must be validated and an error returned if it is invalid. Also, no more that 10 peripheral devices are allowed for a gateway.

The service must also offer an operation for displaying information about all stored gateways (and their devices) and an operation for displaying details for a single gateway. Finally, it must be possible to add and remove a device from a gateway.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![Node js][Node]][Node-url]
* [![Express][Express]][Express-url]
* [![Docker][Docker]][Docker-url]


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

For run this project locally you must has installed:
* Node Package Manager (NPM)
* Git
* yarn
* Docker and Docker Compose


### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/bjvalmaseda-dev/musala-backend.git
   ```
3. Install all dependency
   ```sh
   yarn
   ```
4. Copy and rename `.env.example` to `.env`

5. Edit .env with your enviroment data
   ```.env
      URL_DATABASE=postgres://db_user:db_password@host:port/db_name
      PORT=3000

      #Postgres container
      POSTGRES_DB=edb_name
      POSTGRES_USER=example_user
      POSTGRES_PASSWORD=db_password   
    ```

- `URL_DATABASE`: Database URI, you use the data from the docker containers
- `PORT`: Port when your API server start listen
- `POSTGRES_DB`: Database name for postgres docker container
- `POSTGRES_USER`: Username for postgres docker container
- `POSTGRES_PASSWORD`: User password  for postgres docker container

6. Start your docker and your api executing 
  ```sh
  docker-compose up -d && yarn start
  ```
If everything's was ok you you should be see the following in your terminal

![Terminal][terminal]




<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Test
To run test just execute 
```sh
yarn test
```


<!-- CONTACT -->
## Contact

Bárbaro Javier Valmaseda - [@bjvalmaseda](https://twitter.com/bjvalmaseda) - hello@bjvalmaseda.xyz

Project Link: [https://github.com/bjvalmaseda-dev/musala-backend](https://github.com/bjvalmaseda-dev/musala-backend)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


[product-gateway]: readme/gateway.png
[terminal]: images/terminal.png
[Docker]: https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white
[Docker-url]: https://www.docker.com/
[Express]: https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white
[Express-url]: https://expressjs.com/
[Node]: https://img.shields.io/badge/Node%20JS-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
[Node-url]: https://nodejs.org/
