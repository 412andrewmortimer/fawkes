FROM elixir:alpine

MAINTAINER Andrew Mortimer <andrcmdr@protonmail.com>

# Dependencies
RUN apk add --update nodejs nodejs-npm inotify-tools postgresql-client && \
    npm install -g yarn

# Elixir system dependencies
RUN mix local.hex --force
RUN mix archive.install --force https://github.com/phoenixframework/archives/raw/master/phx_new.ez
RUN mix local.rebar --force

WORKDIR /app
EXPOSE 4000
