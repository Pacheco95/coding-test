WITH to_delete AS (
    SELECT *
    FROM Tbl
    ORDER BY time DESC
    OFFSET 30 ROWS
)
DELETE FROM to_delete;
