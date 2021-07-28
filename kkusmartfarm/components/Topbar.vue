<template>
  <div>
    <header>
      <div class="menu-toggle">
        <label for="sidebar-toggle"><i class="las la-bars"></i></label>
      </div>
      <div class="user-info">
        <div>
          <div>Panuwat</div>
          <div class="user-status">Client</div>
        </div>
        <img src="https://pbs.twimg.com/media/Eykaae3UcAIvofz.jpg" alt="" />
      </div>
    </header>
  </div>
</template>

<style>
.user-info {
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1rem;
}

.user-info div {
  margin-right: 10px;
}

.user-status {
  font-size: 0.8rem;
}
</style>
