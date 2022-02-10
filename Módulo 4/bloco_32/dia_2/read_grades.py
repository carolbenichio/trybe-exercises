recu_students = []

with open("grades.txt", mode="r") as grades_files:
  for line in grades_files:
    student_grade = line
    print(student_grade)
    student_grade = student_grade.split(" ")
    print(student_grade)
    if int(student_grade[1]) < 6:
      recu_students.append(student_grade[0] + "\n")

with open("recu_students_file.txt", mode="w") as recu_students_file:
  print(recu_students)
  recu_students_file.writelines(recu_students)