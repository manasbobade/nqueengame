Addition=function(m,n) {
    return (m+n)
}
Addition(6,7)


Addition=function() {
    m=4
    n=5
    cat("addition",(m+n))
    return (m+n)
}
Addition()


Addition=function(m,n) {
    cat("addition",(m+n))
}
Addition(5,6)


multiplication=function(m=2,n=5) {
cat("multiplication",(m*n))
}
multiplication()
multiplication(6,4)
multiplication(m=4)
multiplication(n=8)
multiplication(m=10,n=12)

print(seq(3,45))

print(mean(3:34))
print(sum(4:5))
print(max(c(3,6,2,3,4)))
print(min(c(3,6,2,3,4)))
print(sqrt(81))
print(abs(34.565655677875467456))
print(ceiling(3.42))
print(floor(3.42))
print(trunc(5.455))
print(round(3.4567,digits=2))
print(signif(3.4567,digits=2))

print(exp(3))
print(toupper("dev darlawar"))
print(tolower("MGM NANDED"))
print(seq(1,100,5))
print(seq(0,100,5))
print(rep(1:3,3))
print(cut(7,4))
print(seq(0,1,0.2))
cat("number of character in my name are",nchar("Dev"))
cat("number of character in my surname are",nchar("darlawar"))
cat("number of character after cutting",substring("dev darlawar",1,7))


