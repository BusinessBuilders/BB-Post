#!/bin/bash

set -o xtrace

# Enable BuildKit for faster builds and cache mounts
export DOCKER_BUILDKIT=1

docker rmi localhost/postiz || true
docker build -t localhost/postiz -f Dockerfile.dev .
