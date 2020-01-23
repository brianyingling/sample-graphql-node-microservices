#!/bin/sh
deployment_dir=/opt/microservices-demo/users-service
if [ -d "$deployment_dir" ] && [ -x "$deployment_dir"]; then
    cd $deployment_dir
    rm -rf $deployment_dir
fi
