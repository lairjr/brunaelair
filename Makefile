image:
	docker build -t node .

bash:
	docker run -v ~/My_Projects/brunaELair:/webapp -t -i --rm node /bin/bash

app:
	docker-compose up

build:
	docker run -v ~/My_Projects/brunaELair:/webapp -t -i --rm node ng build --prod
