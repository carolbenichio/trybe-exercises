import pytest
from codigo import divide

# def test_is_even_if_number_is_even_return_true():
#   assert is_even(2) is True
#   print("funcionou rapaz")

def test_divide_throws_exception_when_dividing_by_zero():
  with pytest.raises(ZeroDivisionError, match='division by zero'):
    divide(2, 0)

# Utilizamos a função raises da pytest , que verifica se a exceção ocorreu. Caso contrário, ela lança um AssertionError , indicando que o teste não passou. Podemos verificar também se o texto retornado na exceção é o esperado, através do parâmetro match , que pode receber uma expressão regular. No exemplo, temos uma divisão por zero, que lança a exceção esperada, e o teste passa com sucesso.
