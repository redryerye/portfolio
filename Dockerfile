FROM openjdk:8-alpine

COPY target/uberjar/portfolio.jar /portfolio/app.jar

EXPOSE 3000

CMD ["java", "-jar", "/portfolio/app.jar"]
