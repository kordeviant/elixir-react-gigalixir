FROM bitwalker/alpine-elixir-phoenix:latest
RUN apk add --no-cache bash

# Set exposed ports
EXPOSE 5000
ENV PORT=5000 MIX_ENV=prod DATABASE_URL=s3.liara.ir:30733 DATABASE_USER=root DATABASE_PASSWORD=9jhD4uRJHqW8rmP8hYzAukhq

# Cache elixir deps
ADD mix.exs mix.lock ./
RUN mix do deps.get, deps.compile

# Same with npm deps
ADD assets/package.json assets/
RUN cd assets && \
    npm install

ADD . .

# Run frontend build, compile, and digest assets
RUN cd assets/ && \
    npm run deploy && \
    cd - && \
    mix do compile, phx.digest

USER default

CMD ["mix", "phx.server"]