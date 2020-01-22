resource "aws_s3_bucket" "deploy-bucket" {
    bucket = "byingling-microservices-demo-${var.app-name}-deployment"
  
}
