class Solution:
    def searchRange(self, nums, target):
        #   If nums is empty return [-1, -1]
        if not nums:
            return [-1, -1]

        start = 0
        end = len(nums) - 1

        # if all element equal to target return
        if nums[start] == target and nums[end] == target:
            return [start, end]

        # Binary search to find left most index
        left = -1
        while start <= end:
            mid = (start + end) // 2
            if nums[mid] > target:
                end = mid - 1
            elif nums[mid] < target:
                start = mid + 1
            else:
                left = mid
                end = mid - 1

        start = left
        end = len(nums) - 1

        # Binary search to find right most element
        right = -1
        while start <= end:
            mid = (start + end) // 2
            if nums[mid] > target:
                end = mid - 1
            elif nums[mid] < target:
                start = mid + 1
            else:
                right = mid
                start = mid + 1

        return [left, right]


nums = [5, 7, 7, 8, 8, 10]
target = 7
print(Solution().searchRange(nums, target))
