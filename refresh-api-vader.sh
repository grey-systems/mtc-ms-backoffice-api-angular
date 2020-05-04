#/bin/sh

docker run --network=host --rm -v ${PWD}:/local swaggerapi/swagger-codegen-cli generate \
    -i http://mtc-ms-backoffice-api/v2/api-docs \
    -l typescript-angular \
    -o /local \
    --additional-properties npmName=@greysystems-angular/mtc-mtc-ms-backoffice-api,snapshot=true,ngVersion=5.0.0