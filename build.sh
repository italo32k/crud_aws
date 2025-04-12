ECR_REGISTRY="843962161547.dkr.ecr.us-east-1.amazonaws.com"
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin $ECR_REGISTRY
docker build -t aws_repositorio .
docker tag aws_repositorio:latest $ECR_REGISTRY/aws_repositorio:latest
docker push $ECR_REGISTRY/aws_repositorio:latest
