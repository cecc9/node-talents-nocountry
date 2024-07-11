# Etapa de construcción: Utilizar una imagen que incluya Gradle para compilar el proyecto Java
FROM gradle:jdk17 as builder

# Copiar el código fuente del proyecto al contenedor
COPY --chown=gradle:gradle . /home/gradle/src
WORKDIR /home/gradle/src

# Compilar el proyecto y generar el JAR
RUN gradle build -x test

# Etapa de ejecución: Utilizar una imagen base de OpenJDK para ejecutar la aplicación
FROM openjdk:17-jdk-alpine

# Copiar el JAR generado desde la etapa de construcción
COPY --from=builder /home/gradle/src/build/libs/serviciosempleabilidad-0.0.1-SNAPSHOT.jar /java-app.jar

# Definir el punto de entrada de la aplicación
ENTRYPOINT ["java","-jar","/java-app.jar"]