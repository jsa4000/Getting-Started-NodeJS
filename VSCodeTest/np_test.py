import numpy as np
import theano
import theano.tensor as T

u = T.scalar("u")
v = T.scalar("v")

def sum(x, y):
    return x + y

y = sum(u,v)
myFunc = theano.function([u,v],y)
print (myFunc (2,4))


#array = np.asarray(range(5))

#print (array)
