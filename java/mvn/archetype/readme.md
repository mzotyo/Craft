# Creat a new project with maven archetype

[https://maven.apache.org/guides](https://maven.apache.org/guide/introductions/introductions-to-archetypes.html)

1. Execute maven archetype script
```shell
    mvn archetype:generate
        -DgroupId=mvn.archetype.example
        -DartifactId=archetypeExample
        -DarchetypeArtifactId=maven-archetype-quickstart
        -DinteractiveMode=false
```

2. Add following lines to **pom.xml**
```
    <properties>
       <java.version>1.8</java.version>
       <maven.compiler.source>1.8</maven.compiler.source>
       <maven.compiler.target>1.8</maven.compiler.target>
    </properties>
```
