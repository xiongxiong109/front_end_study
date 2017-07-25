<template>
	<div class="com-page">
		<h4>异步组件</h4>
		<p>Promise.all, 可以用来在forEach中正确地使用promise</p>
		<button v-if="!isRunning" @click="evt_unlockAll">点击异步解锁各个房间</button>
		<button v-else disabled>unlocking...</button>
		<dt>rooms</dt>
		<div class="room-wrap">
			<div v-for="room in rooms" class="room" :class="{
				'is-locked': room.locked,
				'is-failed': room.failed
			}">{{room.id}}</div>
		</div>
		<p>{{completeState}}</p>
	</div>
</template>
<style type="text/css">
	.room-wrap {
		display: flex;
		/*height: 50px;*/
		flex-wrap: wrap;
	}
	.room {
		width: 40%;
		height: 50px;
		/*flex: 1;*/
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 5% 5px;
		background-color: #00cd00;
		transition: .3s ease;
	}
	.room.is-locked {
		background-color: #ccc;
	}
	.room.is-failed {
		background-color: #c00;
	}
</style>
<script type="text/javascript">
	export default {
		data: () => {
			return {
				rooms: [
					{id: 103, locked: true},
					{id: 204, locked: true},
					{id: 605, locked: true},
					{id: 153, locked: true},
					{id: 466, locked: true},
					{id: 535, locked: true}
				],
				promiseList: [],
				completeState: '',
				isRunning: false
			}
		},
		methods: {
			createPromise(room) {
				let roomUnlock = new Promise((resolve, reject) => {
					let randomTimer = Math.random() * 1500 + 1000;
					setTimeout(() => {
						let randomLockState = Math.random();
						if (randomLockState <= .2) {
							reject(`room${room.id} unlock failed`);
						}
						resolve(randomLockState);
					}, randomTimer);
				});
				roomUnlock.then(state => {
					console.log(state);
					room.locked = false;
				}).catch(e => {
					room.locked = false;
					room.failed = true;
					console.log(e);
				});
				this.promiseList.push(roomUnlock);
			},
			evt_unlockAll() {
				this.rooms = [
					{id: 103, locked: true},
					{id: 204, locked: true},
					{id: 605, locked: true},
					{id: 153, locked: true},
					{id: 466, locked: true},
					{id: 535, locked: true}
				];
				this.rooms.map(room => {
					this.createPromise(room);
				});
				this.isRunning = true;
				// console.log(this.promiseList);
				Promise.all(this.promiseList)
				.then(res => {
					this.completeState = '全部解锁完毕';
					this.isRunning = false;
					console.log(res);
				})
				.catch(err => {
					this.completeState = err;
					this.isRunning = false;
				});
			}
		}
	}
</script>