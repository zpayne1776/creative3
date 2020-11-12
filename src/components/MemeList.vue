<template>
<div class="page">
  <div class="wrapper">
    <div class="memes">
      <div class="meme" v-for="meme in memes" :key="meme.id">
        <div class="image">
          <img :src="'/memes/'+meme.image">
        </div>
        <div class="info">
          <router-link :to="'/comments/' + meme.id">
            <div id="meme-name">{{meme.name}}</div>
          </router-link>
            <div class="buttons">
              <vue-like-dislike-buttons
              :likes="meme.likes"
              :dislikes="meme.dislikes"
              :likeChecked="likeChecked"
              :dislikeChecked="dislikeChecked"
              @like="like(meme)"
              @dislike="dislike(meme)"/>
              <ToggleFavorite v-on:click.native="favorite(meme)"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueLikeDislikeButtons from "vue-like-dislike-buttons";
import ToggleFavorite from "./ToggleFavorite";
import "vue-like-dislike-buttons/src/assets/scss/main.scss"

export default {
  name: 'MemeList',
  props: {
    memes: Array
  },
  components: {
    ToggleFavorite,
    VueLikeDislikeButtons
  },
  data() {
    return {
      likeChecked: false,
      dislikeChecked: false
    };
  },
  methods: {
    like(meme) {
      meme.likes += 1;

    },
    dislike(meme) {
      meme.dislikes += 1;
    },
    favorite(meme) {
      this.$root.$data.favorites.push(meme);
    }
  }
}
</script>

<style lang="scss" scoped>
$color-unchecked: #a7a7a7 !default;
$color-hover: darken($color-unchecked, 15%) !default;
$checked-color: darken($color-unchecked, 25%) !default;


.page {
  display: flex;
  align-items: center;
  justify-content: center;
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #9cf5ff;
  margin-bottom: 40px;
  padding-bottom: 20px;
  width: 100%;
    border-radius: 20px;
}

#meme-name {
  font-size: 20px;
}

.memes {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.meme {
  margin: 10px;
  margin-top: 50px;
  width: 80%;
  border-radius: 20px;
  box-shadow: 0px 0px 15px 15px rgba(50,50,50, .7);
}

.meme img {
  width: 100%;
  object-fit: cover;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

.meme .image {
  display: flex;
  justify-content: center;
}

.info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: #000;
  padding: 10px 30px;
  height: 80px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}

.info h1 {
  font-size: 16px;
}

.info h2 {
  font-size: 18px;
  padding: 10px;
  text-transform: uppercase;
}

.info p {
  margin: 0px;
  font-size: 10px;
}


.price {
  display: flex;
}

button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
}

.auto {
  margin-left: auto;
}


/* Desktop Styles */
@media only screen and (min-width: 961px) {
  .wrapper {
    width: 900px;
  }

  .meme {
    width: 500px;
  }

}
</style>
