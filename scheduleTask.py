# Given a list of tasks (each task will be represented by a string), and a positive integer n
# representing the time it takes to run the same task again, find the minimum amount of time needed to run all tasks.

def schedule_tasks(tasks, n):
    taskfreq = {}
    mintime = 0
    maxfreq = 0
    L = len(tasks)
    for i in range(L):
        taskfreq[tasks[i]] = taskfreq.get(tasks[i], 0)+1

    maxfreq = max(taskfreq.values())

    # Idea: Look at only your highest freq task. E.g. "A".
    # No matter what else you fill the *'s with, this is the shortest possible sequence
    # [A,A,A], n=4: A****A****A
    # 3 tasks (maxfreq) and 2 pauses of n-steps.  (maxfreq-1)*n -1

    mintime = -1 + maxfreq + (maxfreq - 1) * n

    # how many tasks occur at maxfreq? Several tasks may have freq = maxfreq.
    tasks_with_maxfreq = taskfreq.values().count(maxfreq)
    mintime += tasks_with_maxfreq

    return max(mintime, L)

print(schedule_tasks(['q', 'q', 's', 'q', 'w', 'w'], 4))
# print 6
# one of the possible orders to run the task would be
# 'q', 'w', idle, idle, 'q', 'w'
