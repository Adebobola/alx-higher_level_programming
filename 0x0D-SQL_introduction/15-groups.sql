-- lists the number of records with the same
-- score in the table second_table
SELECT score, COUNT(score) as number
	FROM second_table
	GROUP BY score
	HAVING COUNT(score) >= 1
	ORDER BY number DESC;
