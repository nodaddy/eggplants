# FROM node as ui-base
# WORKDIR /usr/src/app
# COPY /ui .
# RUN npm install
# CMD "npm" "start"

#api
FROM mcr.microsoft.com/dotnet/sdk:7.0-alpine
WORKDIR /usr/src/app
COPY api .
RUN dotnet restore "eggplants.csproj"
RUN dotnet publish "eggplants.csproj" -c Release -o /publish
WORKDIR /publish
ENV ASPNETCORE_URLS=http://+:5000
ENTRYPOINT [ "dotnet", "eggplants.dll" ]