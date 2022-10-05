<script setup lang="ts">
const fnInside = (): number => {
  return 10
}

const fnOutside = (): number => {
  const res = fnInside()
  return res
}
</script>
