<?php

class Database extends PDO
{
    public function __construct($DB_TYPE, $DB_HOST, $DB_NAME, $DB_USER, $DB_PASS, $DB_CHARSET)
    {
        try {
            parent::__construct("$DB_TYPE:host=$DB_HOST;dbname=$DB_NAME;charset=$DB_CHARSET", $DB_USER, $DB_PASS);
            $this->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
			//return ['success' => false, 'message' => 'Error de conexión a la base de datos: ' . $e->getMessage()];
            die("Error de conexión a la base de datos: " . $e->getMessage());
        }
    }

	/**
	 * selectAll
	 * @param string $sql An SQL string
	 * @param array $array Paramters to bind
	 * @param constant $fetchMode A PDO Fetch mode
	 * @return mixed
	 */
	public function selectAll($sql, $array = array(), $fetchMode = PDO::FETCH_ASSOC)
	{
		$sth = $this->prepare($sql);
		foreach ($array as $key => $value) {
			$sth->bindValue(":$key", $value);
		}
		
		$sth->execute();
		return $sth->fetchAll($fetchMode);
	}

	/**
	 * selectOne
	 * @param string $sql An SQL string
	 * @param array $array Paramters to bind
	 * @param constant $fetchMode A PDO Fetch mode
	 * @return mixed
	 */
	public function selectOne($sql, $array = array(), $fetchMode = PDO::FETCH_ASSOC)
	{
		$sth = $this->prepare($sql);
			foreach ($array as $key => $value) {
				$sth->bindValue(":$key", $value);
			}
		
			$sth->execute();
    		return $sth->fetch($fetchMode);
	}

	/**
	 * insert
	 * @param string $table A name of table to insert into
	 * @param string $data An associative array
	 */
	public function insert($table, $data)
	{
    try {
        	ksort($data);

        	$fieldNames = implode('`, `', array_keys($data));
        	$fieldValues = ':' . implode(', :', array_keys($data));

        	$sql = "INSERT INTO $table (`$fieldNames`) VALUES ($fieldValues)";
        	$stmt = $this->prepare($sql);

        	foreach ($data as $key => $value) {
            	$stmt->bindValue(":$key", $value);
        	}

        	$success = $stmt->execute();

			if($success) {
				$lastInsertId = $this->lastInsertId();
				return ['success' => true, 'message' => 'Datos guardados correctamente.', 'inserted_id' => $lastInsertId];
            } else {
                return ['success' => false, 'message' => 'Error al guardar los datos.'];
            }

    	} catch (PDOException $e) {
			error_log("Error de PDO [insert]: " . $e->getMessage());
            $errorMessage = "Error de PDO [insert]: " . $e->getMessage();
        	return ['success' => false, 'message' => $errorMessage];
    	}
	}
	
	/**
	 * update
	 * @param string $table A name of table to insert into
	 * @param string $data An associative array
	 * @param string $where the WHERE query part
	 */
	public function update($table, $data, $where)
    {
        try {
            // Validar datos si es necesario

            ksort($data);

            $fieldDetails = NULL;
            foreach ($data as $key => $value) {
                $fieldDetails .= "`$key`=:$key,";
            }
            $fieldDetails = rtrim($fieldDetails, ',');

            $whereString = implode(' AND ', array_map(function ($key, $value) {
                return "$key = :$key";
            }, array_keys($where), $where));
            
            $sql = "UPDATE $table SET $fieldDetails WHERE $whereString";

            $sth = $this->prepare($sql);

            foreach ($data as $key => $value) {
                $sth->bindValue(":$key", $value);
            }

            foreach ($where as $key => $value) {
                $sth->bindValue(":$key", $value);
            }

            $success = $sth->execute();

            if ($success) {
                return ['success' => true, 'message' => 'Datos actualizados correctamente.'];
            } else {
                return ['success' => false, 'message' => "Error al ejecutar la actualización."];
            }

        } catch (PDOException $e) {
            error_log("Error de PDO [update]: " . $e->getMessage());
            $errorMessage = "Error de PDO [update]: " . $e->getMessage();
            return ['success' => false, 'message' => $errorMessage];
        }
    }
	
	/**
	 * delete
	 * 
	 * @param string $table
	 * @param string $where
	 * @param integer $limit
	 * @return integer Affected Rows
	 */
	public function delete($table, $where, $limit = 1)
	{
    	try {
        	$sql = "DELETE FROM $table WHERE $where LIMIT :limit";
        	$stmt = $this->prepare($sql);
        	$stmt->bindParam(':limit', $limit, PDO::PARAM_INT);

        	$delete = $stmt->execute();

        	if ($delete) {
            	return ['success' => true, 'message' => 'Dato(s) eliminado(s) correctamente.'];
        	} else {
            	return ['success' => false, 'message' => 'Ocurrió un error al intentar eliminar el(los) dato(s).'];
        	}
    	} catch (PDOException $e) {
        	return ['success' => false, 'message' => 'Error al eliminar el(los) dato(s). Motivo: ' . $e->getMessage()];
    	}
	}
}