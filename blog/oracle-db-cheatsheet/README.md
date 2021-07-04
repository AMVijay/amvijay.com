## Execution time of Stored Procedure
```oracle
set timing on; 
exec <package/Procedure name with parameter>
```
or
```oracle
DECLARE 
    start_time pls_integer;
BEGIN
    start_time := dbms_utility.get_time;
    exec <package/Procedure name with parameter>;
    dbms_output.put_line((dbms_utility.get_time - start_time)/100 || ' seconds');
END;
```
