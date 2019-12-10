FROM node:12-slim AS base
RUN npm install pm2 -g

WORKDIR /usr/src/app

#ENTRYPOINT ["/sbin/tini", "--"]

COPY package*.json ./

#
# ---- Dependencies ----

FROM base AS dependencies

RUN npm set progress=false && npm config set depth 0

RUN npm install --only=production

RUN cp -R node_modules prod_node_modules

ENV NODE_ENV=qual

RUN npm install

COPY ./src src
COPY tsconfig.json ./
COPY tsconfig.build.json ./
RUN npm run build
#
# ---- Release ----

FROM base AS release


COPY --from=dependencies /usr/src/app/prod_node_modules ./node_modules
COPY --from=dependencies /usr/src/app/dist ./dist
COPY process.yml .

EXPOSE 1010
CMD ["sh", "-c", "pm2-docker process.yml"]
