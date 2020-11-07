<template>
<div id="app">
  <div id="menu">
    <div id="brand">
      <router-link to="/">
        <h1>MEMELAND</h1>
      </router-link>
    </div>
    <div id="side">
      <router-link to="/favorites">
        <div class="menu-item">
          <div id="title">⫸ Your Favorites ⫷</div>
        </div>
      </router-link>
    </div>
  </div>
  <router-view />
</div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


#menu {
  display: flex;
  background-color: #00e3fc;
  margin-bottom: 50px;
  padding-top: 40px;
  padding-bottom: 30px;
  flex-direction: column;
}

#menu a {
  color: white;
  text-decoration: none;
}

#menu h1 {
  font-size: 40px;
}

#brand {
  display: flex;
  justify-content: center;
}

#side {
  display: flex;
  justify-content: center;
  padding: 10px;
  margin-bottom: 20px;
}

.menu-item {
  display: flex;
  flex-direction: column;
}

.menu-item p {
  margin: 0px;
}

.browse {
  margin-right: 50px;
}

/* Desktop Styles */
@media only screen and (min-width: 961px) {

  #menu h1 {
    font-size: 80px;
  }

  #menu {
    padding-top: 25px;
    padding-bottom: 20px;
  }
}
</style>
