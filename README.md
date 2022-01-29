docker-compose build 
docker-compose run --rm frontend sh -c 'npx create-react-app frontend --template typescript' 
docker-compose up -d 
