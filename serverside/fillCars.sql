USE dealership;

# Create a temporary table that stores the necessary data for new cars

CREATE TEMPORARY TABLE Tempcar (
    ID int AUTO_INCREMENT,
    
        make    varchar(200)   NOT NULL,
        model   varchar(100)   NOT NULL,
        manufacturingYear INT NOT NULL,
        trim    VARCHAR(120)   NOT NULL,
        MSRP    DOUBLE(10,2)   NOT NULL,
        buyDate DATE,


    
    PRIMARY KEY(ID)
) COLLATE=utf8mb4_unicode_ci ; #For the joins used, it is important to keep a consistent Collation. utf8mb4_unicode_ci is used here


INSERT INTO Tempcar (make, model, manufacturingYear, trim, MSRP, buyDate) VALUES
    ('toyota', 'camry', 2012, 'base', 10995, 9895.5),
    ('lexus', 'lexus ls 460', 2010, 'base', 11650, 10485),
    ('ford', 'fusion', 2018, 'base', 18890, 17001),
    ('suburu', 'legacy', 2017, 'base', 19990, 17991),
    ('audi', 'a6', 2014, 'base', 26000, 23400),
    ('chevorlet', 'sonic', 2015, 'base', 14590, 13131),
    ('chrysler', '300', 2019, 'base', 20900, 18810),
    ('toyota', 'corolla', 2012, 'base', 14990, 13491),
    ('volkswagen', 'passat', 2013, 'base', 14990, 13491),
    ('honda', 'accord', 2010, 'base', 14990, 13491),
    ('nissan', 'versa', 2020, 'base', 20090, 18081),
;


#Update the buy date for all cars to be the momement they are put in the database for dates that were not entered
UPDATE Tempcar SET buyDate = CURDATE();

INSERT INTO carBrand (brand) 
    SELECT DISTINCT make FROM Tempcar
   
    WHERE make NOT IN(
        SELECT brand FROM carBrand);



INSERT INTO carModel (FK_Brand, Model) 
    SELECT carBrand.ID, tempCar.Model FROM carBrand 
    INNER JOIN tempCar ON carBrand.brand = tempCar.make
    WHERE Model NOT IN(
        SELECT Model FROM carModel);


SELECT carModel.ID, tempCar.trim, tempCar.manufacturingYear, tempCar.MSRP, tempCar.buyDate FROM carModel
    INNER JOIN tempCar ON carModel.Model = tempCar.Model;


INSERT INTO cars (FK_Model, trim, manufacturingYear, MSRP, buyDate) 
    SELECT carModel.ID, tempCar.trim, tempCar.manufacturingYear, tempCar.MSRP, tempCar.buyDate FROM carModel
    INNER JOIN tempCar ON carModel.Model = tempCar.Model;

SELECT * FROM cars;