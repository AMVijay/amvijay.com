## What is EhCache ?
EhCache is caching framework used in Java Application to improve performance in data intensive transactions. It is an open source framework.

## EhCache 3 vs EhCache 2

* EhCache 3 is based on JSR-107 specifiction. JSR-107 is java cache implementation specifiction and API for in-memory cache.
* EhCache 2 is not based on JSR-107 standard, but still have same features as EhCache 3 with its own implementation API. 

## EhCache 3 Implementation in Spring Framework

Below artifact needs to be added in pom.xml for EhCache 3 implementation. 
```xml
<dependency>
	<groupId>org.springframework.boot</groupId>
	<artifactId>spring-boot-starter-cache</artifactId>
</dependency>

<dependency>
	<groupId>org.ehcache</groupId>
	<artifactId>ehcache</artifactId>
</dependency>

<dependency>
	<groupId>javax.cache</groupId>
	<artifactId>cache-api</artifactId>
</dependency>
```

Spring Cache Manager needs to be initialized as stated below. 

```Java
@Configuration
@EnableCaching
public class EhcacheConfiguration {

	@Bean
	public JCacheCacheManager jCacheManager() throws XmlConfigurationException, IOException {
		return new JCacheCacheManager(ehCacheManager());
	}

	@Bean(destroyMethod = "close")
	public javax.cache.CacheManager ehCacheManager() throws XmlConfigurationException, IOException {
		XmlConfiguration xmlConfiguration = new XmlConfiguration(new ClassPathResource("application-ehcache.xml").getURL());
		EhcacheCachingProvider ehcacheProvider = (EhcacheCachingProvider) Caching.getCachingProvider();
		return ehcacheProvider.getCacheManager(ehcacheProvider.getDefaultURI(), xmlConfiguration);
	}

}
```

EhCache configuration XML based on JSR-107 standard: 
```xml
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xmlns="http://www.ehcache.org/v3"
	xmlns:jsr107="http://www.ehcache.org/v3/jsr107"
	xsi:schemaLocation="
            http://www.ehcache.org/v3 http://www.ehcache.org/schema/ehcache-core-3.8.xsd
            http://www.ehcache.org/v3/jsr107 http://www.ehcache.org/schema/ehcache-107-ext-3.8.xsd">

	<service>
		<jsr107:defaults enable-management="true" enable-statistics="true" />
	</service>

	<cache alias="employeeCache" uses-template="default-cache-template">
		<key-type>java.lang.Long</key-type>
		<value-type>com.amvijay.cache.ehcache.spring.app2.entity.Employee</value-type>
		<expiry>
			<ttl unit="seconds">3000</ttl>
		</expiry>		
		<resources>
			<heap unit="entries">100</heap>
			<offheap unit="MB">100</offheap>
		</resources>
		<jsr107:mbeans enable-management="true" enable-statistics="true"/>
	</cache>
	
	<cache-template name="default-cache-template">
		<listeners>
			<listener>
				<class>com.amvijay.cache.ehcache.spring.app2.config.CacheEventLogger</class>
				<event-firing-mode>ASYNCHRONOUS</event-firing-mode>
				<event-ordering-mode>UNORDERED</event-ordering-mode>
				<events-to-fire-on>CREATED</events-to-fire-on>
				<events-to-fire-on>UPDATED</events-to-fire-on>
				<events-to-fire-on>EXPIRED</events-to-fire-on>
				<events-to-fire-on>REMOVED</events-to-fire-on>
				<events-to-fire-on>EVICTED</events-to-fire-on>
			</listener>
		</listeners>
	</cache-template>

</config>
```

## EhCache 2 Implementation in Spring Framwork