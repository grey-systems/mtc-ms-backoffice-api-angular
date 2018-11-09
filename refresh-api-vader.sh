#/bin/sh

docker run --rm -v ${PWD}:/local swaggerapi/swagger-codegen-cli generate \
    -i http://vader:9003/v2/api-docs \
    -l typescript-angular \
    -o /local \
    --additional-properties npmName=@greysystems-angular/mtc-mtc-ms-backoffice-api,snapshot=true,ngVersion=5.0.0
