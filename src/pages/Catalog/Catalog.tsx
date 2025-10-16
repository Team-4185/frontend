import { useState, useMemo } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  MenuItem,
  Slider,
} from '@mui/material';
import type { SelectChangeEvent } from '@mui/material/Select';
import ExpandIcon from '/icons/ExpandMore.svg';
import RadioActive from '/icons/RadioActive.svg';
import RadioInactive from '/icons/RadioInactive.svg';
import SmallArrowRigth from '/icons/SmallArrowRigth.svg';
import { Input } from '../../shared/ui/Input/Input';
import { ProductCard } from '../../shared/ui/ProductCard/ProductCard';
import products from '../../shared/ui/ProductCard/products';

interface Product {
  id: number;
  name: string;
  price: number;
  sale?: boolean;
  img: string;
  hit?: boolean;
  newProduct?: boolean;
  inStock?: boolean;
  preOrder?: boolean;
  reviews?: number;
}

type SortOption =
  | 'popularity'
  | 'name A to Z'
  | 'name Z to A'
  | 'price decreasing'
  | 'price increasing'
  | 'number of reviews';

export const Catalog = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sortBy, setSortBy] = useState<SortOption>('popularity');
  const itemsPerPage: number = 12;

  // Filters state
  const [appleActive, setAppleActive] = useState<boolean>(false);
  const [samsungActive, setSamsungActive] = useState<boolean>(false);
  const [xiaomiActive, setXiaomiActive] = useState<boolean>(false);
  const [onePlusActive, setOnePlusActive] = useState<boolean>(false);
  const [honorActive, setHonorActive] = useState<boolean>(false);
  const [pocoActive, setPocoActive] = useState<boolean>(false);
  const [inStockActive, setInStockActive] = useState<boolean>(false);
  const [preOrderActive, setPreOrderActive] = useState<boolean>(false);
  const [sliderValue, setSliderValue] = useState<number>(2000);

  // Filter and sort products
  const filteredAndSortedProducts = useMemo<Product[]>(() => {
    let filtered: Product[] = [...products];

    // Brand filter
    const selectedBrands: string[] = [];
    if (appleActive) selectedBrands.push('apple');
    if (samsungActive) selectedBrands.push('samsung');
    if (xiaomiActive) selectedBrands.push('xiaomi');
    if (onePlusActive) selectedBrands.push('oneplus');
    if (honorActive) selectedBrands.push('honor');
    if (pocoActive) selectedBrands.push('poco');

    if (selectedBrands.length > 0) {
      filtered = filtered.filter((product: Product) =>
        selectedBrands.some((brand: string) => product.name.toLowerCase().includes(brand))
      );
    }

    // Price filter
    filtered = filtered.filter((product: Product) => {
      const price: number = product.price;
      return price >= 200 && price <= sliderValue;
    });

    // Availability filter
    if (inStockActive && !preOrderActive) {
      filtered = filtered.filter((product: Product) => product.inStock !== false);
    } else if (preOrderActive && !inStockActive) {
      filtered = filtered.filter((product: Product) => product.preOrder === true);
    }

    // Sorting
    switch (sortBy) {
      case 'name A to Z':
        filtered.sort((a: Product, b: Product) => a.name.localeCompare(b.name));
        break;
      case 'name Z to A':
        filtered.sort((a: Product, b: Product) => b.name.localeCompare(a.name));
        break;
      case 'price decreasing':
        filtered.sort((a: Product, b: Product) => {
          const priceA: number = a.price;
          const priceB: number = b.price;
          return priceB - priceA;
        });
        break;
      case 'price increasing':
        filtered.sort((a: Product, b: Product) => {
          const priceA: number = a.price;
          const priceB: number = b.price;
          return priceA - priceB;
        });
        break;
      case 'number of reviews':
        filtered.sort((a: Product, b: Product) => (b.reviews || 0) - (a.reviews || 0));
        break;
      default:
        // popularity - default order
        break;
    }

    return filtered;
  }, [
    appleActive,
    samsungActive,
    xiaomiActive,
    onePlusActive,
    honorActive,
    pocoActive,
    inStockActive,
    preOrderActive,
    sliderValue,
    sortBy,
  ]);

  const totalPages: number = Math.ceil(filteredAndSortedProducts.length / itemsPerPage);
  const startIndex: number = (currentPage - 1) * itemsPerPage;
  const endIndex: number = startIndex + itemsPerPage;
  const currentItems: Product[] = filteredAndSortedProducts.slice(startIndex, endIndex);

  const handleNextPage = (): void => {
    if (currentPage === totalPages) {
      setCurrentPage(1);
    } else {
      setCurrentPage((prev: number) => prev + 1);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handPageChange = (pageNumber: number): void => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSliderChange = (_event: Event, newValue: number | number[]): void => {
    setSliderValue(newValue as number);
    setCurrentPage(1);
  };

  const handleSortChange = (event: SelectChangeEvent<string>): void => {
    setSortBy(event.target.value as SortOption);
    setCurrentPage(1);
  };

  const handleAppleActive = (): void => {
    setAppleActive((prev: boolean) => !prev);
    setCurrentPage(1);
  };
  const handleSamsungActive = (): void => {
    setSamsungActive((prev: boolean) => !prev);
    setCurrentPage(1);
  };
  const handleXiaomiActive = (): void => {
    setXiaomiActive((prev: boolean) => !prev);
    setCurrentPage(1);
  };
  const handleOnePlusActive = (): void => {
    setOnePlusActive((prev: boolean) => !prev);
    setCurrentPage(1);
  };
  const handleHonorActive = (): void => {
    setHonorActive((prev: boolean) => !prev);
    setCurrentPage(1);
  };
  const handlePocoActive = (): void => {
    setPocoActive((prev: boolean) => !prev);
    setCurrentPage(1);
  };
  const handleInStockActive = (): void => {
    setInStockActive((prev: boolean) => !prev);
    setCurrentPage(1);
  };
  const handlePreOrderActive = (): void => {
    setPreOrderActive((prev: boolean) => !prev);
    setCurrentPage(1);
  };

  return (
    <>
      <Container maxWidth="xl" disableGutters sx={{ padding: '61px 32px' }}>
        <Box
          sx={{
            display: 'flex',
            gap: '80px',
            width: '100%',
            height: 'max-content',
          }}
        >
          <Box
            sx={{
              width: '357px',
              height: 'max-content',
              borderRadius: '22px',
              padding: '20px',
              boxShadow: '2px 1px 4px 0 rgba(0, 0, 0, 0.25)',
              background: '#fff',
            }}
          >
            <span style={{ fontWeight: '600', fontSize: '32px', color: '#000' }}>Filter:</span>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                pt: '48px',
              }}
            >
              <Accordion
                defaultExpanded
                sx={{
                  border: 'none !important',
                  borderRadius: 'none !important',
                  boxShadow: 'none !important',
                }}
              >
                <AccordionSummary
                  sx={{
                    borderRadius: '6px',
                    padding: '8px 6px',
                    boxShadow: ' 0 1px 4px 0 rgba(0, 0, 0, 0.15)',
                    background: '#fff',
                    minHeight: 'unset',
                    '&.Mui-expanded': {
                      minHeight: 'unset',
                    },
                    '& .MuiAccordionSummary-content': {
                      margin: 0,
                    },
                    '& .MuiAccordionSummary-content.Mui-expanded': {
                      margin: 0,
                    },
                  }}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  expandIcon={<img src={ExpandIcon} />}
                >
                  <Box>
                    <span
                      style={{
                        fontFamily: 'Montserrat,sans-serif',
                        fontWeight: '500',
                        fontSize: '20px',
                        color: '#000',
                      }}
                    >
                      Brand
                    </span>
                  </Box>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    mt: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                  }}
                >
                  <form
                    style={{
                      display: 'flex',
                      gap: '6px',
                      alignItems: 'center',
                      cursor: 'pointer',
                      userSelect: 'none',
                    }}
                    onClick={handleAppleActive}
                  >
                    {appleActive ? (
                      <img src={RadioActive} alt="Radio Active button" />
                    ) : (
                      <img src={RadioInactive} alt="Radion Inactive button" />
                    )}
                    <span
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: '400',
                        fontSize: '20px',
                        color: '#000',
                      }}
                    >
                      Apple
                    </span>
                  </form>
                  <form
                    style={{
                      display: 'flex',
                      gap: '6px',
                      alignItems: 'center',
                      cursor: 'pointer',
                      userSelect: 'none',
                    }}
                    onClick={handleSamsungActive}
                  >
                    {samsungActive ? (
                      <img src={RadioActive} alt="Radio Active button" />
                    ) : (
                      <img src={RadioInactive} alt="Radion Inactive button" />
                    )}
                    <span
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: '400',
                        fontSize: '20px',
                        color: '#000',
                      }}
                    >
                      Samsung
                    </span>
                  </form>
                  <form
                    style={{
                      display: 'flex',
                      gap: '6px',
                      alignItems: 'center',
                      cursor: 'pointer',
                      userSelect: 'none',
                    }}
                    onClick={handleXiaomiActive}
                  >
                    {xiaomiActive ? (
                      <img src={RadioActive} alt="Radio Active button" />
                    ) : (
                      <img src={RadioInactive} alt="Radion Inactive button" />
                    )}
                    <span
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: '400',
                        fontSize: '20px',
                        color: '#000',
                      }}
                    >
                      Xiaomi
                    </span>
                  </form>
                  <form
                    style={{
                      display: 'flex',
                      gap: '6px',
                      alignItems: 'center',
                      cursor: 'pointer',
                      userSelect: 'none',
                    }}
                    onClick={handleOnePlusActive}
                  >
                    {onePlusActive ? (
                      <img src={RadioActive} alt="Radio Active button" />
                    ) : (
                      <img src={RadioInactive} alt="Radion Inactive button" />
                    )}
                    <span
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: '400',
                        fontSize: '20px',
                        color: '#000',
                      }}
                    >
                      OnePlus
                    </span>
                  </form>
                  <form
                    style={{
                      display: 'flex',
                      gap: '6px',
                      alignItems: 'center',
                      cursor: 'pointer',
                      userSelect: 'none',
                    }}
                    onClick={handleHonorActive}
                  >
                    {honorActive ? (
                      <img src={RadioActive} alt="Radio Active button" />
                    ) : (
                      <img src={RadioInactive} alt="Radion Inactive button" />
                    )}
                    <span
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: '400',
                        fontSize: '20px',
                        color: '#000',
                      }}
                    >
                      Honor
                    </span>
                  </form>
                  <form
                    style={{
                      display: 'flex',
                      gap: '6px',
                      alignItems: 'center',
                      cursor: 'pointer',
                      userSelect: 'none',
                    }}
                    onClick={handlePocoActive}
                  >
                    {pocoActive ? (
                      <img src={RadioActive} alt="Radio Active button" />
                    ) : (
                      <img src={RadioInactive} alt="Radion Inactive button" />
                    )}
                    <span
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: '400',
                        fontSize: '20px',
                        color: '#000',
                      }}
                    >
                      Poco
                    </span>
                  </form>
                </AccordionDetails>
              </Accordion>
              <Accordion
                defaultExpanded
                sx={{
                  border: 'none !important',
                  borderRadius: 'none !important',
                  boxShadow: 'none !important',
                  '&:before': { display: 'none' },
                }}
              >
                <AccordionSummary
                  sx={{
                    borderRadius: '6px',
                    padding: '8px 6px',
                    boxShadow: ' 0 1px 4px 0 rgba(0, 0, 0, 0.15)',
                    background: '#fff',
                    minHeight: 'unset',
                    '&.Mui-expanded': {
                      minHeight: 'unset',
                    },
                    '& .MuiAccordionSummary-content': {
                      margin: 0,
                    },
                    '& .MuiAccordionSummary-content.Mui-expanded': {
                      margin: 0,
                    },
                  }}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  expandIcon={<img src={ExpandIcon} />}
                >
                  <Box>
                    <span
                      style={{
                        fontFamily: 'Montserrat,sans-serif',
                        fontWeight: '500',
                        fontSize: '20px',
                        color: '#000',
                      }}
                    >
                      Price
                    </span>
                  </Box>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                  }}
                >
                  <Box sx={{ width: '100%', mt: '20px' }}>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        mb: 1,
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: 600,
                        fontSize: '18px',
                        color: '#000',
                      }}
                    >
                      <span>€ {sliderValue}</span>
                      <span>€ 2000</span>
                    </Box>
                    <Slider
                      value={sliderValue}
                      onChange={handleSliderChange}
                      min={299}
                      max={2000}
                      step={10}
                      size="small"
                      defaultValue={0}
                      aria-label="Small"
                      valueLabelDisplay="auto"
                      sx={{
                        color: '#9e9e9e',
                        height: 6,
                        '& .MuiSlider-thumb': {
                          width: 20,
                          height: 20,
                          backgroundColor: '#fff',
                          border: '2px solid #9e9e9e',
                          '&:hover': {
                            boxShadow: '0 0 0 8px rgba(0,0,0,0.05)',
                          },
                        },
                        '& .MuiSlider-rail': {
                          opacity: 0.4,
                          backgroundColor: '#9e9e9e',
                        },
                        '& .MuiSlider-track': {
                          backgroundColor: '#9e9e9e',
                        },
                      }}
                    />
                  </Box>
                </AccordionDetails>
              </Accordion>
              <Accordion
                defaultExpanded
                sx={{
                  border: 'none !important',
                  borderRadius: 'none !important',
                  boxShadow: 'none !important',
                  '&:before': { display: 'none' },
                }}
              >
                <AccordionSummary
                  sx={{
                    borderRadius: '6px',
                    padding: '8px 6px',
                    boxShadow: ' 0 1px 4px 0 rgba(0, 0, 0, 0.15)',
                    background: '#fff',
                    minHeight: 'unset',
                    '&.Mui-expanded': {
                      minHeight: 'unset',
                    },
                    '& .MuiAccordionSummary-content': {
                      margin: 0,
                    },
                    '& .MuiAccordionSummary-content.Mui-expanded': {
                      margin: 0,
                    },
                  }}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  expandIcon={<img src={ExpandIcon} />}
                >
                  <Box>
                    <span
                      style={{
                        fontFamily: 'Montserrat,sans-serif',
                        fontWeight: '500',
                        fontSize: '20px',
                        color: '#000',
                      }}
                    >
                      Availability
                    </span>
                  </Box>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    mt: '20px',
                  }}
                >
                  <form
                    style={{
                      display: 'flex',
                      gap: '6px',
                      alignItems: 'center',
                      cursor: 'pointer',
                      userSelect: 'none',
                    }}
                    onClick={handleInStockActive}
                  >
                    {inStockActive ? (
                      <img src={RadioActive} alt="Radio Active button" />
                    ) : (
                      <img src={RadioInactive} alt="Radion Inactive button" />
                    )}
                    <span
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: '400',
                        fontSize: '20px',
                        color: '#000',
                      }}
                    >
                      In stock
                    </span>
                  </form>
                  <form
                    style={{
                      display: 'flex',
                      gap: '6px',
                      alignItems: 'center',
                      cursor: 'pointer',
                      userSelect: 'none',
                    }}
                    onClick={handlePreOrderActive}
                  >
                    {preOrderActive ? (
                      <img src={RadioActive} alt="Radio Active button" />
                    ) : (
                      <img src={RadioInactive} alt="Radion Inactive button" />
                    )}
                    <span
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: '400',
                        fontSize: '20px',
                        color: '#000',
                      }}
                    >
                      Pre-order
                    </span>
                  </form>
                </AccordionDetails>
              </Accordion>
            </Box>
          </Box>
          <Box sx={{ width: '100%', height: 'max-content' }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <span
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: '600',
                  fontSize: '40px',
                  color: '#000',
                }}
              >
                Catalog
              </span>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
                <span style={{ fontWeight: '400', fontSize: '16px', color: 'rgba(0, 0, 0, 0.8)' }}>
                  Sort by
                </span>
                <Input
                  inherit
                  sx={{ width: '200px' }}
                  select
                  value={sortBy}
                  onChange={handleSortChange}
                  id="sort"
                  name="sort"
                >
                  <MenuItem value="popularity">Popularity</MenuItem>
                  <MenuItem value="name A to Z">Name A to Z</MenuItem>
                  <MenuItem value="name Z to A">Name Z to A</MenuItem>
                  <MenuItem value="price decreasing">Price decreasing</MenuItem>
                  <MenuItem value="price increasing">Price increasing</MenuItem>
                  <MenuItem value="number of reviews">Number of reviews</MenuItem>
                </Input>
              </Box>
            </Box>
            <Box
              sx={{
                width: '100%',
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gridTemplateRows: 'auto',
                justifyItems: 'center',
                rowGap: '35px',
                mt: '45px',
              }}
            >
              {currentItems.map((product: Product) => (
                <ProductCard
                  key={product.id}
                  image={product.img}
                  name={product.name}
                  price={product.price}
                  sale={product.sale}
                  hit={product.hit}
                  newProduct={product.newProduct}
                />
              ))}
            </Box>
            {totalPages > 0 && (
              <Box
                sx={{
                  width: '245px',
                  height: '45px',
                  display: 'flex',
                  gap: '17px',
                  borderRadius: '10px',
                  padding: '6px',
                  boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.15)',
                  background: '#fff',
                  mt: '60px',
                  alignItems: 'center',
                  alignSelf: 'center',
                  justifySelf: 'center',
                }}
              >
                {Array.from({ length: totalPages }, (_: unknown, i: number) => (
                  <Box key={i} sx={{ display: 'flex', gap: '17px' }}>
                    <span
                      style={
                        currentPage === i + 1
                          ? {
                              borderRadius: '50px',
                              padding: '9px 15px',
                              background: '#000',
                              color: '#fff',
                              fontWeight: '600',
                              fontSize: '16px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              cursor: 'pointer',
                            }
                          : {
                              border: '1px solid #727070',
                              borderRadius: '50px',
                              padding: '9px 15px',
                              fontWeight: '600',
                              fontSize: '16px',
                              color: '#000',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              cursor: 'pointer',
                            }
                      }
                      onClick={() => handPageChange(i + 1)}
                      className={currentPage === i + 1 ? 'active' : ''}
                    >
                      {i + 1}
                    </span>
                  </Box>
                ))}
                <Box
                  sx={{
                    width: '73px',
                    height: '36px',
                    borderRadius: '10px',
                    padding: '8px',
                    boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.15)',
                    background: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    alignSelf: 'center',
                    justifySelf: 'end',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                  }}
                  onClick={handleNextPage}
                >
                  Next
                  <img src={SmallArrowRigth} alt="Arrow Rigth icon" />
                </Box>
              </Box>
            )}
          </Box>
        </Box>
      </Container>
    </>
  );
};
