ECR_REGISTRY="843962161547.dkr.ecr.us-east-1.amazonaws.com"
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin $ECR_REGISTRY
docker build -t crud_aws .
docker tag crud_aws:latest $ECR_REGISTRY/crud_aws:latest
docker push $ECR_REGISTRY/crud_aws:latest
