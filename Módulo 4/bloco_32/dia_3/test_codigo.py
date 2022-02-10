import pytest
from codigo import divide

# def test_is_even_if_number_is_even_return_true():
#   assert is_even(2) is True
#   print("funcionou rapaz")

def test_divide_throws_exception_when_dividing_by_zero():
  with pytest.raises(ZeroDivisionError, match='division by zero'):
    divide(2, 0)