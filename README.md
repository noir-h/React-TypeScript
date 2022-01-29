Reactのプロジェクトディレクトリがない場合は  
docker-compose build  
docker-compose run --rm app sh -c 'npx create-react-app project-name --template typescript'  
Reactのプロジェクトディレクトリが既にある場合は  
docker-compose up -d  
