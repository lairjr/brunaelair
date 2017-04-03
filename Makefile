bash:
	docker run -v ~/My_Projects/github/brunaELair:/webapp -t -i --rm node /bin/bash

app:
	docker run -p 0.0.0.0:4200:4200 -v ~/My_Projects/github/brunaELair:/webapp -t -i --rm node ng serve --host 0.0.0.0 --port 4200
