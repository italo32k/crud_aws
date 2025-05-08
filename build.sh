ECR_REGISTRY="507944432706.dkr.ecr.us-east-1.amazonaws.com"
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin $ECR_REGISTRY
docker build -t aws_ecr .
docker tag aws_ecr:latest $ECR_REGISTRY/aws_ecr:latest
docker push $ECR_REGISTRY/aws_ecr:latest
