FROM golang:1.22.0-alpine3.19 as dependencies

WORKDIR /src

COPY go.mod go.sum .

RUN go mod download

COPY . .


FROM dependencies as build

ENV KUBECONFIG /home/.kube/config

RUN go build -o /bin/go-controller


FROM alpine:latest as run

COPY --from=build /bin/go-controller /bin/

#RUN addgroup -S nonroot && adduser -S nonroot -G nonroot

#RUN chown -R nonroot:nonroot .

#USER nonroot:nonroot

EXPOSE 8080

ENTRYPOINT [ "/bin/go-controller" ]
